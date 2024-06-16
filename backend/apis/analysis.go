package apis

import (
	"context"
	"encoding/json"
	"log"
	"net/http"
	"renie/backend/internal/db"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func analysis(w http.ResponseWriter, r *http.Request) {
	collection := db.Client.Database("renie").Collection("transactions")

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

	counts := [12]int{}
	for _, result := range results {
		t := result["time"].(primitive.DateTime).Time()
		counts[t.Month()-1]++
	}

	json.NewEncoder(w).Encode(counts)

}
