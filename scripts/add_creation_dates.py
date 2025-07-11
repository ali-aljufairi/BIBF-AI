#!/usr/bin/env python3
import os
import re
from datetime import datetime
from pathlib import Path

def get_file_creation_date(file_path):
    """Get file creation date in YYYY-MM-DD format."""
    # Get file's creation time (use st_birthtime on macOS, st_ctime as fallback)
    stat = os.stat(file_path)
    try:
        creation_time = stat.st_birthtime  # macOS
    except AttributeError:
        creation_time = stat.st_ctime  # Fallback for other systems
    
    return datetime.fromtimestamp(creation_time).strftime('%Y-%m-%d')

def add_date_to_frontmatter(file_path):
    """Add creation date to file's frontmatter if it doesn't exist."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if file already has frontmatter with date
    if re.search(r'^---\s*\n.*?date:.*?\n.*?---', content, re.DOTALL | re.MULTILINE):
        print(f"Skipping {file_path} - already has date in frontmatter")
        return

    creation_date = get_file_creation_date(file_path)
    
    # If file has frontmatter without date, add date
    if content.startswith('---\n'):
        # Find the end of the frontmatter
        parts = content.split('---\n', 2)
        if len(parts) >= 2:
            new_content = f"---\n{parts[1].rstrip()}\ndate: {creation_date}\n---\n{parts[2]}"
        else:
            new_content = f"---\ndate: {creation_date}\n---\n{content[4:]}"
    else:
        # If no frontmatter exists, add it with the date
        new_content = f"---\ndate: {creation_date}\n---\n\n{content}"

    # Write the modified content back to the file
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Added date {creation_date} to {file_path}")

def main():
    # Get the project root directory
    project_root = Path(__file__).parent.parent
    md_dir = project_root / 'common_md'
    
    # Process all markdown files in the common_md directory
    for md_file in md_dir.glob('*.md'):
        if md_file.is_file():
            print(f"Processing {md_file}")
            add_date_to_frontmatter(md_file)

if __name__ == '__main__':
    main()
