using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class Login : MonoBehaviour {
    public string password;
    public System.DateTime Time = System.DateTime.Now;
    public Text errorText;


    // Use this for initialization
    void Start () {
     
	}
	
	// Update is called once per frame
	void Update () {
        
    }
    public void Password (InputField Password, Text errorText)
    {
        password = Password.text;
    }
   
   

    public void Submit() {
        if (password == "@tt3nd@nce")
        {
            SceneManager.LoadScene("chooser");
        }
        if (password != "@tt3nd@nce")
        {
            errorText.text = "Wrong Password";
            errorText.fontSize = 25;
            errorText.fontStyle = FontStyle.BoldAndItalic;
            errorText.color = Color.red;
            errorText.transform.position.Set(0, 35, 0);
        }
    }
   


}

    
    

