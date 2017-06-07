package com.kush.common;

import org.apache.log4j.Logger;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class CentralLogger {
	
	private Logger log = Logger.getLogger(getClass());
	
	@After("execution(* com.kush.controller.ProductController.*(..))")
    public void log(JoinPoint point) {
        log.debug(point.getSignature().getName() + " executed.");
    }

}
