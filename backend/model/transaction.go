package model

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Transaction struct {
	ID     primitive.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
	UserID int                `bson:"user_id" json:"user_id"`
	Time   time.Time          `bson:"time" json:"time"`
	Type   string             `bson:"type" json:"type"`
}

var TransactionMigrationData = []Transaction{
	{
		UserID: 1,
		Time:   time.Now().AddDate(0, -1, 0),
		Type:   "bottle",
	},
	{
		UserID: 2,
		Time:   time.Now().AddDate(0, -2, 0),
		Type:   "bottle",
	},
	{
		UserID: 3,
		Time:   time.Now().AddDate(0, -3, 0),
		Type:   "can",
	},
	{
		UserID: 3,
		Time:   time.Now().AddDate(0, -3, 0),
		Type:   "can",
	},
	{
		UserID: 1,
		Time:   time.Now().AddDate(0, -4, 0),
		Type:   "paper",
	},
	{
		UserID: 1,
		Time:   time.Now().AddDate(0, -5, 0),
		Type:   "plastic",
	},
}
