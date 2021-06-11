class Toastr {
    // options = {};
  
    static showNotification(position, text = "I am a notification") {
      const notification = document.createElement("div");
      notification.textContent = text;
      notification.classList.add("toastr", position);
      document.querySelector("body").style.position = "relative";
      document.querySelector("body").append(notification);
      this.removeNotification("div");
    }
  
    static removeNotification(element) {
      setTimeout(() => {
        document.querySelector("body").style.position = "static";
        document.querySelector(element).style.setProperty("opacity", 0);
        setTimeout(() => {
          document.querySelector(element).remove();
        }, 1000);
      }, 4000);
    }
  }

 
