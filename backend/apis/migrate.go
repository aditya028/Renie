package apis

import (
	"net/http"
	"renie/backend/internal/utils"
	"renie/backend/model"

	"go.mongodb.org/mongo-driver/bson"
)

// Migrate is a handler that migrates the database
func Migrate(w http.ResponseWriter, r *http.Request) {
	var userDocuments []interface{}

	for _, user := range model.UserMigrationData {
		userDocuments = append(userDocuments, bson.D{
			{Key: "username", Value: user.Username},
			{Key: "password", Value: user.Password},
			{Key: "email", Value: user.Email},
		})
	}

	err := utils.InsertMultipleDocuments("renie", "users", userDocuments)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	
	var binDocuments []interface{}
	for _, bin := range model.BinMigrationData {
		binDocuments = append(binDocuments, bson.D{
			{Key: "location", Value: bin.Location},
			{Key: "time", Value: bin.Time},
			{Key: "bottle_count", Value: bin.BottleCount},
			{Key: "plastic_count", Value: bin.PlasticCount},
			{Key: "can_count", Value: bin.CanCount},
			{Key: "paper_count", Value: bin.PaperCount},
		})
	}

	err = utils.InsertMultipleDocuments("renie", "bins", binDocuments)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	var transactionDocuments []interface{}
	for _, transaction := range model.TransactionMigrationData {
		transactionDocuments = append(transactionDocuments, bson.D{
			{Key: "user_id", Value: transaction.UserID},
			{Key: "time", Value: transaction.Time},
			{Key: "type", Value: transaction.Type},
		})
	}

	err = utils.InsertMultipleDocuments("renie", "transactions", transactionDocuments)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Migration successful"))
}
