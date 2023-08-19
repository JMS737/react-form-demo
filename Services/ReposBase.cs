using react_form_demo.Models;
using react_form_demo.Services;

public abstract class ReposBase<TEntity> : IRepos<TEntity> where TEntity : EntityBase
{
    private int _nextId = 1;
    protected int NextId => _nextId++;

    protected IDictionary<int, TEntity> Entities { get; set; }

    public ReposBase()
    {
        Entities = new Dictionary<int, TEntity>();
    }

    public TEntity Add(TEntity obj)
    {
        obj.Id = NextId;
        Entities.Add(obj.Id, obj);

        return obj;
    }

    public void Delete(int id)
    {
        Entities.Remove(id);
    }

    public IQueryable<TEntity> Get()
    {
        return Entities.Values.AsQueryable();
    }

    public TEntity Get(int id)
    {
        return Entities[id];
    }

    public void Update(int id, TEntity obj)
    {
        if (obj.Id != id)
        {
            throw new ArgumentException("Id does not match Id of obj", nameof(id));
        }

        Entities[id] = obj;
    }
}