package accountsPageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import pageObjects.Utility;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;

public class PaymentVoucher {
    WebDriver dr;
    String pg="PaymentVoucher";
    Utility u= new Utility();

    public PaymentVoucher(WebDriver d)
    {
        this.dr=d;
        PageFactory.initElements(d, this);
    }
    public void openPaymentVoucher()
    {
        ArrayList<String> tabs2 = new ArrayList<String> (dr.getWindowHandles());
        dr.switchTo().window(tabs2.get(1));
        WebElement menu= dr.findElement(By.xpath("//*[contains(text(),'Accounts')]"));
        Actions builder= new Actions(dr);
        builder.moveToElement(menu).build().perform();
        dr.findElement(By.linkText("Payment Voucher")).click();
        dr.switchTo().frame(dr.findElement(By.id("Payment Voucher")));
    }
    public void verifyPage(String schl,Collection<String> sc) throws IOException, InterruptedException
    {
       // dr.findElement(By.name("ctl00$ContentPlaceHolder1$BtnControls1$ctl01")).click();
        Thread.sleep(1000);
        u.captureScreenshot(dr,schl,pg,sc);
    }
}
