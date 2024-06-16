package utils

import (
	"context"
	"fmt"
	"renie/backend/internal/db"
)

func InsertMultipleDocuments( dbName string, collName string, docs []interface{}) error {
	// Select the database and collection
	client := db.Client
	collection := client.Database(dbName).Collection(collName)

	// Insert the documents
	insertManyResult, err := collection.InsertMany(context.Background(), docs)
	if err!= nil {
		return fmt.Errorf("failed to insert documents: %w", err)
	}

	fmt.Printf("Inserted %d documents\n", len(insertManyResult.InsertedIDs))
	for _, id := range insertManyResult.InsertedIDs {
		fmt.Printf("Inserted document with ID %v\n", id)
	}

	return nil
}