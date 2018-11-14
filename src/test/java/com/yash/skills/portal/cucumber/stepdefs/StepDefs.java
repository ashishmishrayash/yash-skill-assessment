package com.yash.skills.portal.cucumber.stepdefs;

import com.yash.skills.portal.SkillAssessmentApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = SkillAssessmentApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
