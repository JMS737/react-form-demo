namespace react_form_demo.Models;

public class Character : EntityBase
{
    public string Firstname { get; set; }
    public string Lastname { get; set; }
    public Race Race { get; set; }
    public int Age { get; set; }
}