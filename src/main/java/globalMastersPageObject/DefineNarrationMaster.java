package globalMastersPageObject;

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

public class DefineNarrationMaster {
  WebDriver dr;
  String pg="DefineNarrationMaster";
  Utility u= new Utility();

  @FindBy(id="ContentPlaceHolder1_cmbentrytype")WebElement vouchertype;
  @FindBy(id="ContentPlaceHolder1_txtnarration_TextBox")WebElement narration;
  @FindBy(id="ContentPlaceHolder1_BtnControls_btnSave")WebElement save;
  @FindBy(id="ContentPlaceHolder1_BtnControls_btnView")WebElement view;

  public DefineNarrationMaster(WebDriver d)
  {
	  this.dr=d;
	  PageFactory.initElements(d, this); 
  }
  public void openDefineNarrationMaster()
  {
      ArrayList<String> tabs2 = new ArrayList<String> (dr.getWindowHandles());
      dr.switchTo().window(tabs2.get(1));
      WebElement menu= dr.findElement(By.xpath("//*[contains(text(),'Global Masters')]"));
 	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("Define Narration Master")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/AccountManager/AccNarrationMaster.aspx']")));
  }
  public void verifyPage(String schl,Collection<String>sc) throws IOException, InterruptedException
  {
	  dr.findElement(By.xpath("//div[@class='content']")).click();
	  Thread.sleep(1000);
      u.captureScreenshot(dr,schl,pg,sc);
  }
  public void selectVoucherType()
  {
      new Select(vouchertype).selectByIndex(1);
  }
  public void enterNarration(String narr)
  {
      narration.sendKeys(narr);
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
              cell.findElement(By.xpath("//input[starts-with(@id,'ContentPlaceHolder1_rptAccNarration')]")).click();
              break;
          }
          dr.findElement(By.id("ContentPlaceHolder1_BtnControls_btnModify")).click();
          dr.findElement(By.id("popup_ok")).click();
      }else
          System.out.println("No record Found");
      u.verifyView(dr,school, pg, sc);
  }
}
