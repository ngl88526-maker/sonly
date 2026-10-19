"""Validate theme JSON/section references and build a Shopify upload archive."""
import json
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
root = Path(__file__).resolve().parent.parent
source = root / 'shopify-theme'
for path in source.rglob('*.json'):
    data = json.loads(path.read_text())
    if path.parent.name == 'templates':
        for section in data.get('sections', {}).values():
            assert (source / 'sections' / f"{section['type']}.liquid").is_file(), path
output = root / 'dist' / 'sockonly-shopify-theme.zip'
output.parent.mkdir(exist_ok=True)
with ZipFile(output, 'w', ZIP_DEFLATED) as archive:
    for path in sorted(source.rglob('*')):
        if path.is_file():
            archive.write(path, path.relative_to(source))
with ZipFile(output) as archive:
    assert archive.testzip() is None
    assert 'layout/theme.liquid' in archive.namelist()
print(f'Created {output} ({output.stat().st_size:,} bytes)')
