package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.LoginPage;

public class steps {
	
	public WebDriver driver;
	
	public LoginPage lp;
	

	@Given("^Unser Launch Chrome browser$")
	public void unser_Launch_Chrome_browser() throws Throwable {
	    System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+ "//drivers//chromedriver.exe");
	    driver = new ChromeDriver();
	    
	    
	   lp = new LoginPage(driver);
	   
	}

	@When("^User opens URL \"([^\"]*)\"$")
	public void user_opens_URL(String url) throws Throwable {
	    driver.get(url);
	   
	}

	@When("^User enters Email as \"([^\"]*)\" and Password as \"([^\"]*)\"$")
	public void user_enters_Email_as(String email, String password) throws Throwable {
	    lp.setUserName(email);
	    lp.setUserPassword(password);
	   
	}
	
	
	@When("^Click on Login$")
	public void click_on_Login() throws Throwable {
	    lp.clickLogin();
	   
	}

	@Then("^Page Title should be \"([^\"]*)\"$")
	public void page_Title_should_be(String title) throws Throwable {
	    
		if(driver.getPageSource().contains("Login was unsuccessful.")) {
			driver.close();
			Assert.assertTrue(false);
		}
		else {
			System.out.println(driver.getTitle());
			Assert.assertEquals(title, driver.getTitle());
		}
	   
	}

	@When("^User click on Log out link$")
	public void user_click_on_Log_out_link() throws Throwable {
	    
		lp.clickLogout();
	    Thread.sleep(10000);
	}

	@Then("^close browser$")
	public void close_browser() throws Throwable {
	    
		driver.quit();
		
	   
	}


	
}
