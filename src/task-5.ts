type Status = "loading" | "success" | "error";

function logStatus(status: Status): void {
    if (status === "loading") {
      console.log("Loading...");
    } else if (status === "success") {
      console.log("Success!");
    } else if (status === "error") {
      console.log("Something went wrong");
    }
  }
  
  console.log('task-5');
  
  logStatus("loading");
  