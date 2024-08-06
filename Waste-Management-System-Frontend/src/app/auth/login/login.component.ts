import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  passwordMismatch = false;
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onLogin(form: NgForm) {
    const backendResponse = { passwordMatch: false };

    if (backendResponse.passwordMatch) {
      this.passwordMismatch = false;
      console.log("Invalid Form");
      return;
    } else {
      this.passwordMismatch = true;
      form.controls["password"].setErrors({ mismatch: true });
    }
    this.authService.userLogin({
      email: form.value.email,
      password: form.value.password,
    });
  }
}
