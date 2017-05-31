package pageObjects;

import java.io.IOException;
import java.util.Collection;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class TrialBalance {
  WebDriver dr;
  Utility u= new Utility();
  String r="TrialBalance";
  
  @FindBy(id="ContentPlaceHolder1_txtfromDate_TextBox")WebElement fromdate;
  @FindBy(id="ContentPlaceHolder1_txttoDate_TextBox")WebElement todate;
  @FindBy(name="ctl00$ContentPlaceHolder1$SingleButton1$ctl00")WebElement show;
  
  public TrialBalance(WebDriver d)
  {
	  this.dr=d;
	  PageFactory.initElements(d, this);
  }
  public void openTrialBalance()
  {
	  WebElement menu= dr.findElement(By.xpath("//img[@src='/Images/layout/Reports.png']"));
	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("Trial Balance")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/Report/Account/RptTrialBal.aspx']")));
  }
  public void selectFromDate(String mm, String yy, String dd) throws InterruptedException
  {
	  u.selectDate(dr, fromdate, mm, yy, dd);
  }
  public void selectToDate(String mm, String yy, String dd) throws InterruptedException
  {
	  u.selectDate(dr, todate, mm, yy, dd);
  }
  public void selectLedgerGroup(String gp)throws InterruptedException
  {
	  dr.findElement(By.xpath("//*[@id=\"MainLeftPanel\"]/div/div/div[2]/div/button")).click();
	  WebElement select= dr.findElement(By.xpath("/html/body/div[4]/ul"));
	  List<WebElement>options= select.findElements(By.tagName("span"));
	  for(WebElement option:options) {
		  if(gp.equals(option.getText())) {
			  option.click();
		      break;}
	  }
	  //dr.findElement(By.xpath("/html/body/div[4]/div/ul/li[3]")).click();
	  Thread.sleep(3000);
  }
  public void selectAccount(String acc) 
  {
	  dr.findElement(By.xpath("//*[@id=\"MainLeftPanel\"]/div/div/div[3]/div/button")).click();
	  WebElement select= dr.findElement(By.xpath("/html/body/div[3]/ul"));
	  List<WebElement>options= select.findElements(By.tagName("span"));
	  for(WebElement option:options) {
		  if(option.getText().equals(acc))
		  { option.click();
		    break;
		  }
	  }
	  dr.findElement(By.xpath("/html/body/div[3]/div/ul/li[3]")).click();
  }	 
  public void selectOpening(String op)
  {
	  List<WebElement>options= dr.findElements(By.name("ctl00$ContentPlaceHolder1$OB"));
	  String val;
	  for(WebElement option:options)
	  {
		  if(op.equals("without opening"))
		  {
			  val="rdowithOB";
			  if(option.getAttribute("value").equals(val))
				  option.click();
		  }
		  if(op.equals("with opening"))
		  {
			  val="rdowithO";
			  if(option.getAttribute("value").equals(val))
				  option.click();
		  }
		  if(op.equals("only opening"))
		  {
			  val="RdoOnlyOB";
			  if(option.getAttribute("value").equals(val))
				  option.click();
		  }
	  }  
  }
  public void selectGroupLedgerWise(String glwise)
  {
	  List<WebElement>options= dr.findElements(By.name("ctl00$ContentPlaceHolder1$Acc"));
	  String val;
	  for(WebElement option:options)
	  {
		  if(glwise.equals("group wise"))
		  {
			  val="rdogroup";
			  if(option.getAttribute("value").equals(val))
				  option.click();
		  }
		  if(glwise.equals("ledger wise"))
		  {
			  val="rdoledger";
			  if(option.getAttribute("value").equals(val))
				  option.click();
		  }
	  }  
  }
  public void clickShow(String str, Collection<String>sc ) throws InterruptedException, IOException
  {
	 show.click();
	 Thread.sleep(5000);
	 u.captureScreenshot(dr, str, r,sc);
  }
}
