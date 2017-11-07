package accountsPageObject;

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

import org.openqa.selenium.support.ui.Select;
import pageObjects.Utility;

public class DefineGeneralLedger {
  WebDriver dr;
  String pg="DefineGeneralLedger";
  Utility u= new Utility();

  @FindBy(id="ContentPlaceHolder1_txtAccName_TextBox")WebElement accountname;
  @FindBy(id="ContentPlaceHolder1_cmbGroup")WebElement group;
  @FindBy(id="ContentPlaceHolder1_txtAccType_TextBox")WebElement accounttype;
  @FindBy(id="ContentPlaceHolder1_txtOpnBal_TextBox")WebElement openingbalance;
  @FindBy(id="ContentPlaceHolder1_cmbOpnType")WebElement openingbalancetype;
  @FindBy(id="ContentPlaceHolder1_chkfixassets")WebElement isfixedassets;
  @FindBy(id="ContentPlaceHolder1_chkiscash")WebElement iscashbook;
  @FindBy(id="ContentPlaceHolder1_txtdepreciation_TextBox")WebElement depreciation;
  @FindBy(id="ContentPlaceHolder1_BtnControls_btnSave")WebElement save;
  @FindBy(id="ContentPlaceHolder1_BtnControls_btnView")WebElement view;

  public DefineGeneralLedger(WebDriver d)
  {
	  this.dr=d;
	  PageFactory.initElements(d, this); 
  }
  public void openDefineGeneralLedger()
  {
      ArrayList<String> tabs2 = new ArrayList<String> (dr.getWindowHandles());
      dr.switchTo().window(tabs2.get(1));
      WebElement menu= dr.findElement(By.xpath("//*[contains(text(),'Accounts')]"));
 	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("Define General Ledger")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/AccountManager/AccGeneralLedger.aspx']")));
  }
  public void verifyPage(String schl,Collection<String>sc) throws IOException, InterruptedException
  {
	  dr.findElement(By.name("ctl00$ContentPlaceHolder1$BtnControls$ctl01")).click();
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
  public void selectIsFixedAssets()
  {
      isfixedassets.click();
  }
  public void enterDepreciation(String dpr)
  {
      depreciation.sendKeys(dpr);
  }
  public void selectIsCashBook()
  {
      iscashbook.click();
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
              cell.findElement(By.xpath("//input[starts-with(@id,'ContentPlaceHolder1_rptBankLedger')]")).click();
              break;
          }
          dr.findElement(By.id("ContentPlaceHolder1_BtnControls_btnModify")).click();
          dr.findElement(By.id("popup_ok")).click();
      }else
          System.out.println("No record Found");
      u.verifyView(dr,school, pg, sc);
  }
}
