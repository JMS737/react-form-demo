using react_form_demo.Services;

namespace react_form_demo;

public static class DebugTools
{
    public static CharacterRepos CreateCharacterRepos()
    {
        var repos = new CharacterRepos();

        repos.Add(new()
        {
            Firstname = "Ander",
            Lastname = "Greenbottle",
            Age = 42,
            Race = Models.Race.Halfling
        });

        repos.Add(new()
        {
            Firstname = "Yennefer",
            Lastname = "",
            Age = 30,
            Race = Models.Race.Human
        });

        repos.Add(new()
        {
            Firstname = "Geralt",
            Lastname = "of Rivia",
            Age = 150,
            Race = Models.Race.Human
        });

        repos.Add(new()
        {
            Firstname = "Grog",
            Lastname = "Strongjaw",
            Age = 38,
            Race = Models.Race.Orc
        });

        return repos;
    }
}