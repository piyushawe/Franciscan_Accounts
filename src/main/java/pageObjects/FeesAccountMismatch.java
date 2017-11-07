package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;

public class FeesAccountMismatch {
    WebDriver dr;
    Utility u= new Utility();
    String r="FeesAccountMismatch";

    public FeesAccountMismatch(WebDriver d)
    {
        this.dr=d;
        PageFactory.initElements(d, this);
    }
    public void openFeesAccountMismatch()
    {
        ArrayList<String> tabs2 = new ArrayList<String> (dr.getWindowHandles());
        dr.switchTo().window(tabs2.get(1));
        WebElement menu= dr.findElement(By.xpath("//*[contains(text(),'Reports')]"));
        Actions builder= new Actions(dr);
        builder.moveToElement(menu).build().perform();
        dr.findElement(By.linkText("Fees Account Mismatch")).click();
        dr.switchTo().frame(dr.findElement(By.id("Fees Account Mismatch")));
    }
    public void takeScreenshot(String str, Collection<String> sc) throws IOException {
        u.captureScreenshot(dr, str, r,sc);
    }
}
