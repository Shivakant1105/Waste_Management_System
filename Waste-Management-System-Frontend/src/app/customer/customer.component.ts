import { HttpClient } from "@angular/common/http";
import { Component, OnInit, NgModule } from "@angular/core";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"],
})
export class CustomerComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}
  customer = {
    name: "",
    email: "",
    address: "",
    date: "",
    time: "",
    garbageType: "",
  };
  isFormSubmitted = false;
  submitForm() {
    this.http
      .post("http://localhost:8000/api/request/request-submit", this.customer)
      .subscribe(
        (response) => {
          console.log("Request submitted successfully:", response);
          // Add your logic here for success response
        },
        (error) => {
          console.log("Error submitting request:", error);
          // Add your logic here for error response
        }
      );
    this.isFormSubmitted = true;
  }
  // You can handle the form submission here, such as sending the data to a server or performing other actions.

  // Add your logic to process the customer's request
}
