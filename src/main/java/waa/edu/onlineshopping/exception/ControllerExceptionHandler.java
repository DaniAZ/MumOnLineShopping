package waa.edu.onlineshopping.exception;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@ControllerAdvice
public class ControllerExceptionHandler {


    @ExceptionHandler(ImageNotFoundException.class)
    public ModelAndView handleError(HttpServletRequest req, ImageNotFoundException exception) {
        ModelAndView mav = new ModelAndView();
        mav.addObject("invalidImage", exception.getImage());
        mav.addObject("exception", exception);
        mav.addObject("url", req.getRequestURL() + "?" + req.getQueryString());
        mav.setViewName("ImageNotFound");
        return mav;
    }

}