//package jpaProject.jpashop.exception;
//
//import org.springframework.http.HttpStatus;
//import org.springframework.validation.BindingResult;
//import org.springframework.validation.FieldError;
//import org.springframework.web.bind.MethodArgumentNotValidException;
//import org.springframework.web.bind.annotation.ControllerAdvice;
//import org.springframework.web.bind.annotation.ExceptionHandler;
//import org.springframework.web.bind.annotation.RestController;
//
//@ControllerAdvice   // 전역 설정을 위한 annotaion
//@RestController
//public class ExceptionAdvisor {
//
//    @ExceptionHandler(MethodArgumentNotValidException.class)
//    public String processValidationError(MethodArgumentNotValidException exception, HttpStatus httpStatus) {
//        BindingResult bindingResult = exception.getBindingResult();
//
//        StringBuilder builder = new StringBuilder();
//        for (FieldError fieldError : bindingResult.getFieldErrors()) {
//            builder.append("httpStatus.value() :" + httpStatus.value());
//            builder.append(fieldError.getDefaultMessage());
//            builder.append(" 입력된 값: [");
//            builder.append(fieldError.getRejectedValue());
//            builder.append("]");
////            builder.append(" 입력된 값: [");
////            builder.append(fieldError.getRejectedValue());
////            builder.append("]");
//        }
//
//        return builder.toString();
//    }
//
//}