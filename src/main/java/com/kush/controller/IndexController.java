
package com.kush.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 * Controller handles Spring MVC request
 * @author kush
 */
@Controller
public class IndexController {
	
	/**
	 * Root Index Page Request 
	 * @return modelAndView
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView defaultMethod() {
		ModelAndView model = new ModelAndView();
		model.setViewName("index");

		//model.addObject("title", helloWorldService.getTitle(name));
		//model.addObject("msg", helloWorldService.getDesc());
		return model;
	}
}