namespace react_form_demo.Services;

public interface IRepos<TEntity>
{
    IQueryable<TEntity> Get();

    TEntity Get(int id);

    TEntity Add(TEntity obj);

    void Update(int id, TEntity obj);

    void Delete(int id);

    // void SaveChanges();
}