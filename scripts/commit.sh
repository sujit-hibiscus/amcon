#!/bin/bash

# Git commit script for AMCON Castings Next.js project

# Get commit message from argument or use default
COMMIT_MSG="${1:-Update project files}"

# Add all changes
git add -A

# Check if there are changes to commit
if git diff --cached --quiet; then
    echo "No changes to commit"
    exit 0
fi

# Commit with message
git commit -m "$COMMIT_MSG"

# Show commit result
if [ $? -eq 0 ]; then
    echo "✓ Commit successful: $COMMIT_MSG"
    git log -1 --oneline
else
    echo "✗ Commit failed"
    exit 1
fi
