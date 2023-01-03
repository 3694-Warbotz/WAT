/* --------------------------------------------
	Code written by Andrew Friedman
	Its legitness I know!
	4/6/2016
   --------------------------------------------*/

#pragma strict
import System.IO;
import System;  // Used for getting the date

var Name : UnityEngine.UI.InputField;
var Reason : UnityEngine.UI.InputField;
var Title : UnityEngine.UI.Text;
var Error : UnityEngine.UI.Text;
var Late : GameObject; //same as reason

function Start () {
	Debug.Log(DateTime.Now.ToString("MM/dd/yy"));
}

function Update () {
	if (parseInt(System.DateTime.Now.ToString("hhmmss")) > 043000) {
		Title.text = "LATE SIGN IN";
		Late.SetActive(true);
	}
}

function ExitYes () {
	Application.LoadLevel("MainMenu");
}

function Submit () {
	if (Name.text == "") {
		Error.text = "Enter your name!";
	}else if (Reason.text == "" && parseInt(System.DateTime.Now.ToString("hhmmss")) > 043000) {
		Error.text = "Enter the reason you are late!";
	}else {
		SAVE();
	}
}

function SAVE () { //All the shit that saves
	var sw = new System.IO.StreamWriter(DateTime.Now.ToString("MM.dd.yy") + ".txt", true); //declares var
	sw.WriteLine(Name.text + "^" + DateTime.Now.ToString("MM/dd/yy") + "^" + Reason.text);
	sw.Flush();
    sw.Close();
	//Loads team editor scene
	Application.LoadLevel("SignIn");
}
