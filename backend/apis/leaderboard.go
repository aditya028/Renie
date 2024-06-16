package apis

import (
	"context"
	"encoding/json"
	"log"
	"net/http"
	"renie/backend/internal/db"
	"sort"

	"go.mongodb.org/mongo-driver/bson"
)

type UserCount struct {
	UserID int32
	Count  int
}

func leaderboard(w http.ResponseWriter, r *http.Request) {
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

	// Create a map to count the transactions for each user
	userCounts := make(map[int32]int)
	for _, result := range results {
		userID := result["user_id"].(int32)
		userCounts[userID]++
	}

	var counts []UserCount
	for userID, count := range userCounts {
		counts = append(counts, UserCount{UserID: userID, Count: count})
	}

	// Sort the slice in descending order by count
	sort.Slice(counts, func(i, j int) bool {
		return counts[i].Count > counts[j].Count
	})

	// Encode the slice as JSON and write it to the response
	json.NewEncoder(w).Encode(counts)
}
