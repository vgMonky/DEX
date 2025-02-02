#!/usr/bin/env bash

# Define project directories
project_root="./"
src_directory="./src"

# Define files to show
files_to_show=(
  "src/main.ts"
  "src/app/app.component.ts"
  "src/app/app.config.ts"
  "src/app/app.routes.ts"
  "src/styles.css"
  "src/app/core/store/app.state.ts"
  "src/app/core/store/index_reducers.ts"
)

# Generate output
output=$(
    echo "# Angular Project Structure Overview"
    echo "This script provides a quick overview of the Angular project's structure and source files."
    echo ""
    echo "The next list of instrucctions only apply if the future promped scenarios needs it:"
    echo "- Use angular cli if posible, this will mantain the file convention."
    echo "- Make sure to use 'npx ng ...' when providing code samples. eg. 'npm ng component --standalone --skip-tests'"
    echo "- Use standalone components to avoid the need for NgModule."
    echo "- Use RxJS when ever it is convinient for asynchronous and event-based programs."
    echo "- Use NgRx store when ever convinient for global state definitions and management"
    echo "- The store will contain directories defined for store slices, and will centralize import references for reducers and effects on their corresponding index file. "

    echo -e "\n## Level 1 Tree of Project Root"
    tree -L 1 "$project_root"

    echo -e "\n## Tree of /src Directory"
    if [ -d "$src_directory" ]; then
        tree "$src_directory"
    else
        echo "The /src directory does not exist."
    fi

    echo -e "\n## README Content"
    if [ -f "./README.md" ]; then
        echo -e "\n=== ./README.md ==="
        cat "./README.md"
    else
        echo "No README.md file found."
    fi

    # Show core file contents
    echo -e "\n## Core File Contents"
    for file in "${files_to_show[@]}"; do
        if [ -f "$file" ]; then
            echo -e "\n=== $file ==="
            cat "$file"
        else
            echo -e "\nFile not found: $file"
        fi
    done
)

# Print output
echo "$output"

# Copy to clipboard (requires xclip installed on Linux)
echo "$output" | xclip -selection clipboard
if [ $? -eq 0 ]; then
    echo -e "\n✓ Successfully copied to clipboard!"
else
    echo -e "\n✗ Failed to copy to clipboard"
fi

