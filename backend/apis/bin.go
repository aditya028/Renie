package apis

import (
	"context"
	"encoding/json"
	"log"
	"net/http"
	"renie/backend/internal/db"

	"go.mongodb.org/mongo-driver/bson"
)

func bin(w http.ResponseWriter, r *http.Request) {
	collection := db.Client.Database("renie").Collection("bins")

    // Find all documents
    cur, err := collection.Find(context.Background(), bson.D{})
    if err != nil {
		log.Println(err)
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    defer cur.Close(context.Background())

    var results []bson.M
    if err := cur.All(context.Background(), &results); err != nil {
		log.Println(err)
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    // Return the bin details as JSON
    json.NewEncoder(w).Encode(results)
}