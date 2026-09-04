param(
    [string[]] $Preset = @('Minify', 'Balanced', 'Weak', 'Medium', 'Strong', 'StrongScalable'),
    [string] $Lumora = '',
    [int] $TimeoutSeconds = 30
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$lua = (Get-Command lua -ErrorAction Stop).Source
if ([string]::IsNullOrWhiteSpace($Lumora)) {
    $candidate = Join-Path (Split-Path -Parent $root) 'Lumora\build\bin\lumora.exe'
    if (Test-Path -LiteralPath $candidate) { $Lumora = $candidate }
    else { throw "Lumora no encontrado; usa -Lumora <ruta>" }
}

$cases = Get-ChildItem (Join-Path $root 'test\cases\*.lua') | Sort-Object Name
$tmp = Join-Path ([IO.Path]::GetTempPath()) ('fengetheus-' + [Guid]::NewGuid().ToString('N'))
New-Item -ItemType Directory -Path $tmp | Out-Null
try {
    $passed = 0; $failed = 0
    foreach ($p in $Preset) {
        foreach ($case in $cases) {
            $obf = Join-Path $tmp "$($case.BaseName).$p.lua"
            $origOut = Join-Path $tmp "$($case.BaseName).orig.out"
            $obfOut = Join-Path $tmp "$($case.BaseName).obf.out"
            & $lua (Join-Path $root 'src\cli.lua') --preset $p --seed 424242 --out $obf $case.FullName *> (Join-Path $tmp 'obfuscate.log')
            if ($LASTEXITCODE -ne 0 -or -not (Test-Path -LiteralPath $obf)) {
                Write-Host "[$p/$($case.BaseName)] OBFUSCATE-FAIL"; $failed++; continue
            }
            & $Lumora --timeout $TimeoutSeconds $case.FullName *> $origOut
            $origRc = $LASTEXITCODE
            & $Lumora --timeout ($TimeoutSeconds * 2) $obf *> $obfOut
            $obfRc = $LASTEXITCODE
            $a = (Get-Content -Raw -LiteralPath $origOut) -replace '(?m)\[string [^\]]+\]:\d+:', '[string]:<line>:' -replace '(?m)^.*\.lua:\d+:', '<file>:<line>:'
            $b = (Get-Content -Raw -LiteralPath $obfOut) -replace '(?m)\[string [^\]]+\]:\d+:', '[string]:<line>:' -replace '(?m)^.*\.lua:\d+:', '<file>:<line>:'
            if ($origRc -eq $obfRc -and $a -eq $b) {
                Write-Host "[$p/$($case.BaseName)] PASS" -ForegroundColor Green; $passed++
            } else {
                Write-Host "[$p/$($case.BaseName)] FAIL" -ForegroundColor Red
                Write-Host "  original (rc=$origRc): $a"
                Write-Host "  obfuscated (rc=$obfRc): $b"
                $failed++
            }
        }
    }
    Write-Host "SUMMARY PASS=$passed FAIL=$failed"
    if ($failed -gt 0) { exit 1 }
} finally {
    Remove-Item -LiteralPath $tmp -Recurse -Force -ErrorAction SilentlyContinue
}
