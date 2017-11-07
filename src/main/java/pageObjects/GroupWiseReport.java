package pageObjects;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class GroupWiseReport {
  WebDriver dr;
  Utility u= new Utility();
  String r="GroupWiseReport";
  
  @FindBy(id="ContentPlaceHolder1_txtfromDate_TextBox")WebElement fromdate;
  @FindBy(id="ContentPlaceHolder1_txttoDate_TextBox")WebElement todate;
  @FindBy(name="ctl00$ContentPlaceHolder1$SingleButton1$ctl00")WebElement show;
  
  public GroupWiseReport(WebDriver d)
  {
	  this.dr=d;
	  PageFactory.initElements(d, this);
  }
  public void openGroupWiseReport()
  {
	  ArrayList<String> tabs2 = new ArrayList<String> (dr.getWindowHandles());
	  dr.switchTo().window(tabs2.get(1));
	  WebElement menu= dr.findElement(By.xpath("//*[contains(text(),'Reports')]"));
	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("Group Wise Report")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/Report/Account/GroupWiseRptDtl.aspx']")));
  }
  public void selectFromDate(String mm, String yy, String dd) throws InterruptedException
  {
	  u.selectDate(dr, fromdate, mm, yy, dd);
  }
  public void selectToDate(String mm, String yy, String dd) throws InterruptedException
  {
	  u.selectDate(dr, todate, mm, yy, dd);
  }
  public void selectLedgerGroup(int gp)throws InterruptedException
  {
	  dr.findElement(By.xpath("//*[@id=\"MainLeftPanel\"]/div/div/div[2]/div/button")).click();
	  WebElement select= dr.findElement(By.xpath("/html/body/div[4]/ul"));
	  List<WebElement>options= select.findElements(By.tagName("span"));
	  if (options.isEmpty())
		  System.out.println("No Value Present");
	  else
		  options.get(gp).click();

	  /*for(WebElement option:options) {
		  if(gp.equals(option.getText()))
		  { System.out.println(option.getText());
			  option.click();
			  break;
		  }
	  }*/
	  //dr.findElement(By.xpath("/html/body/div[4]/div/ul/li[3]")).click();
	  Thread.sleep(1000);
  }
  public void selectAccount(int acc)
  {
	  dr.findElement(By.xpath("//*[@id=\"MainLeftPanel\"]/div/div/div[3]/div/button")).click();
	  WebElement select= dr.findElement(By.xpath("/html/body/div[3]/ul"));
	  List<WebElement>options= select.findElements(By.tagName("span"));
	  if (options.isEmpty())
		  System.out.println("No Value Present");
	  else
		  options.get(acc).click();

	  /*for(WebElement option:options) {
		  if(option.getText().equals(acc))
			  option.click();
	  }*/
	  dr.findElement(By.xpath("/html/body/div[3]/div/ul/li[3]")).click();
  }	  
  public void clickShow(String str, Collection<String>sc ) throws InterruptedException, IOException
  {
	 show.click();
	 u.verifyShow(dr, str, r, sc);
	 Thread.sleep(5000);
	 u.captureScreenshot(dr, str, r,sc);
  }
}
