package apis

import (
	"net/http"

	"github.com/go-chi/chi"
)

func PublicRouter() http.Handler{
	r := chi.NewRouter()

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Welcome to online Judge API!"))
	})
	
	r.Get("/bin", bin)
	r.Get("/analysis", analysis)
	r.Get("/lederboard", leaderboard)
	r.Get("/migrate", Migrate)
	return r 
}