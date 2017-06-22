package accountsPageObject;

import java.io.IOException;
import java.util.Collection;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import org.openqa.selenium.support.ui.Select;
import pageObjects.Utility;

public class DefinePartyLedger {
  WebDriver dr;
  String pg="DefinePartyLedger";
  Utility u= new Utility();

  @FindBy(id="ContentPlaceHolder1_txtAccName_TextBox")WebElement accountname;
  @FindBy(id="ContentPlaceHolder1_cmbGroup")WebElement group;
  @FindBy(id="ContentPlaceHolder1_txtAccType_TextBox")WebElement accounttype;
  @FindBy(id="ContentPlaceHolder1_txtAddress_TextBox")WebElement accountaddress;
  @FindBy(id="ContentPlaceHolder1_txtCity_TextBox")WebElement city;
  @FindBy(id="ContentPlaceHolder1_txtPinCode_TextBox")WebElement pincode;
  @FindBy(id="ContentPlaceHolder1_txtEmail_TextBox")WebElement email;
  @FindBy(id="ContentPlaceHolder1_txtPhone_TextBox")WebElement phoneno;
  @FindBy(id="ContentPlaceHolder1_txtPan_TextBox")WebElement pan;
  @FindBy(id="ContentPlaceHolder1_txtTin_TextBox")WebElement tin;
  @FindBy(id="ContentPlaceHolder1_txtOpnBal_TextBox")WebElement openingbalance;
  @FindBy(id="ContentPlaceHolder1_cmbOpnType")WebElement openingbalancetype;
  @FindBy(id="ContentPlaceHolder1_BtnControls_btnSave")WebElement save;
  @FindBy(id="ContentPlaceHolder1_BtnControls_btnView")WebElement view;

  public DefinePartyLedger(WebDriver d)
  {
	  this.dr=d;
	  PageFactory.initElements(d, this); 
  }
  public void openDefinePartyLedger()
  {
      WebElement menu= dr.findElement(By.xpath("//img[@src='/Images/layout/Accounts.png']"));
 	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("Define Party Ledger")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/AccountManager/AccPartyLedger.aspx']")));
  }
  public void verifyPage(String schl,Collection<String>sc) throws IOException, InterruptedException
  {
	  dr.findElement(By.xpath("//div[@class='content']")).click();
	  Thread.sleep(1000);
      u.captureScreenshot(dr,schl,pg,sc);
  }
  public void enterAccountName(String aname)
  {
      accountname.sendKeys(aname);
  }
  public void selectGroup()
  {
      new Select(group).selectByIndex(1);
  }
  public void enterAccountAddress(String addr)
  {
      accountaddress.sendKeys(addr);
  }
  public void enterCity(String cty)
  {
      city.sendKeys(cty);
  }
  public void enterPinCode(String pcode)
  {
      pincode.sendKeys(pcode);
  }
  public void enterEMail(String eml)
  {
      email.sendKeys(eml);
  }
  public void enterPhoneNo(String pno)
  {
      phoneno.sendKeys(pno);
  }
  public void enterPan(String pn)
  {
      pan.sendKeys(pn);
  }
  public void enterTin(String tn)
  {
      tin.sendKeys(tn);
  }
  public void enterOpeningBalance(String obal)
  {
      openingbalance.sendKeys(obal);
  }
  public void selectOpeningBalanceType()
  {
      new Select(openingbalancetype).selectByIndex(0);
  }
  public void clickSave(String school, Collection<String> sc)throws IOException
  {
      save.click();
      u.verifySave(dr, school, pg, sc);
  }
  public void clickView(String school, Collection<String> sc)throws IOException
  {
      view.click();
      WebElement table= dr.findElement(By.id("example"));
      List<WebElement> cells= table.findElements(By.tagName("td"));
      if (cells.size()>1) {
          for (WebElement cell : cells) {
              cell.findElement(By.xpath("//input[starts-with(@id,'ContentPlaceHolder1_rptPartyLedger')]")).click();
              break;
          }
          dr.findElement(By.id("ContentPlaceHolder1_BtnControls_btnModify")).click();
          dr.findElement(By.id("popup_ok")).click();
      }else
          System.out.println("No record Found");
      u.verifyView(dr,school, pg, sc);
  }
}
