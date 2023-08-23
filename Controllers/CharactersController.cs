using Microsoft.AspNetCore.Mvc;
using react_form_demo.Models;
using react_form_demo.Services;

namespace react_form_demo.Controllers;

[Route("[controller]")]
[ApiController]
public class CharactersController : ControllerBase
{
    private readonly CharacterRepos _characterRepos;

    public CharactersController(CharacterRepos characterRepos)
    {
        _characterRepos = characterRepos;
    }

    [HttpGet]
    public IEnumerable<Character> Get()
    {
        return _characterRepos.Get();
    }

    [HttpGet("{id}")]
    public Character Get(int id)
    {
        return _characterRepos.Get(id);
    }

    [HttpPost]
    public Character Post([FromBody] Character character)
    {
        return _characterRepos.Add(character);
    }

    [HttpPut]
    public void Put(int id, Character character)
    {
        _characterRepos.Update(id, character);
    }

    [HttpDelete]
    public void Delete(int id)
    {
        _characterRepos.Delete(id);
    }
}