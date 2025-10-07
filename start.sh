#!/bin/sh

echo "Starting application..."

# Function to wait for database to be ready
wait_for_db() {
    echo "Waiting for database to be ready..."
    
    # Wait up to 60 seconds for database to be ready
    for i in $(seq 1 60); do
        if bun run scripts/migrateDB.ts 2>/dev/null; then
            echo "Database migration completed successfully!"
            return 0
        fi
        echo "Database not ready yet, waiting... (attempt $i/60)"
        sleep 2
    done
    
    echo "Database failed to become ready after 60 attempts"
    exit 1
}

# Wait for database and run migration
wait_for_db

# Start the Next.js server
echo "Starting Next.js server..."
exec bun server.js