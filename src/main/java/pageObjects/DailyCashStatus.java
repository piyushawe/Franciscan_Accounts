package pageObjects;

import java.io.IOException;
import java.util.Collection;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class DailyCashStatus {
  WebDriver dr;
  Utility u= new Utility();
  String r="DailyCashStatus";
  
  @FindBy(id="ContentPlaceHolder1_txtfromDate_TextBox")WebElement fromdate;
  @FindBy(id="ContentPlaceHolder1_txttoDate_TextBox")WebElement todate;
  @FindBy(id="ContentPlaceHolder1_ddlCashAcc")WebElement cashaccount;
  @FindBy(id="ContentPlaceHolder1_chkcon")WebElement consolidatedreport;
  @FindBy(name="ctl00$ContentPlaceHolder1$SingleButton1$ctl00")WebElement show;
  
  public DailyCashStatus(WebDriver d)
  {
	  this.dr=d;
	  PageFactory.initElements(d, this);
  }
  public void openDailyCashStatus()
  {
	  WebElement menu= dr.findElement(By.xpath("//img[@src='/Images/layout/Reports.png']"));
	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("Daily Cash Status")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/Report/Account/RptDailyCashStatus.aspx']")));
  }
  public void selectFromDate(String mm, String yy, String dd) throws InterruptedException
  {
	  u.selectDate(dr, fromdate, mm, yy, dd);
  }
  public void selectToDate(String mm, String yy, String dd) throws InterruptedException
  {
	  u.selectDate(dr, todate, mm, yy, dd);
  }
  public void selectCashAccount(String cacc)
  {
	  new Select(cashaccount).selectByVisibleText(cacc);
  }
  public void selectConsolidatedReport()
  {
	  consolidatedreport.click();
  }
  public void clickShow(String str, Collection<String>sc ) throws InterruptedException, IOException
  {
	 show.click();
	 Thread.sleep(5000);
	 u.captureScreenshot(dr, str, r,sc);
  }
}
