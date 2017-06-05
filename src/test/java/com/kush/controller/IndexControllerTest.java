package com.kush.controller;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;

/**
 * Junit test for Index Controller classes
 * @author kush
 *
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"/testApplicationContext.xml"})
public class IndexControllerTest {
	
	@Autowired
	private IndexController indexController;
	
	private MockMvc mockMvc;
	
	@Before
	public void setup() {
		//MockitoAnnotations.initMocks(this);
		this.mockMvc = MockMvcBuilders.standaloneSetup(indexController).build();
	}
	
	@Test
	public void defaultMethodTest() throws Exception {
			ResultActions r = mockMvc.perform(get("/"));
			r.andExpect(view().name("index"));
	}
}
