package waa.edu.onlineshopping.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "Image was Not Uploaded.")
public class ImageNotFoundException extends RuntimeException {
    private static final long serialVersionUID = 3935230281455340039L;

    private String image;

    public ImageNotFoundException(String image) {
        this.image = image;
    }

    public String getImage() {
        return image;
    }




}
