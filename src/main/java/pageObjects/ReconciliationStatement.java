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

public class ReconciliationStatement {
  WebDriver dr;
  Utility u= new Utility();
  String r="ReconciliationStatement";
  
  @FindBy(id="ContentPlaceHolder1_txtfromDate_TextBox")WebElement fromdate;
  @FindBy(id="ContentPlaceHolder1_txttoDate_TextBox")WebElement todate;
  @FindBy(id="ContentPlaceHolder1_ddlAcc")WebElement bank;
  @FindBy(id="ContentPlaceHolder1_ddlchqstatus")WebElement chequestatus;
  @FindBy(id="ContentPlaceHolder1_chkstu")WebElement withstudentwise;
  @FindBy(name="ctl00$ContentPlaceHolder1$SingleButton1$ctl00")WebElement show;
  
  public ReconciliationStatement(WebDriver d)
  {
	  this.dr=d;
	  PageFactory.initElements(d, this);
  }
  public void openReconciliationStatement()
  {
	  WebElement menu= dr.findElement(By.xpath("//img[@src='/Images/layout/Reports.png']"));
	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("Reconciliation Statement")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/Report/Account/RptReconciliationStatement.aspx']")));
  }
  public void selectFromDate(String mm, String yy, String dd) throws InterruptedException
  {
	  u.selectDate(dr, fromdate, mm, yy, dd);
  }
  public void selectToDate(String mm, String yy, String dd) throws InterruptedException
  {
	  u.selectDate(dr, todate, mm, yy, dd);
  }
  public void selectBank(String b)
  {
	  new Select(bank).selectByVisibleText(b);
  }
  public void selectChequeStatus(String cstatus)
  {
	  new Select(chequestatus).selectByVisibleText(cstatus);
  }
  public void selectWithStudentWise()
  {
	  withstudentwise.click();
  }
  public void clickShow(String str, Collection<String>sc ) throws InterruptedException, IOException
  {
	 show.click();
	 Thread.sleep(5000);
	 u.captureScreenshot(dr, str, r,sc);
  }
}
 