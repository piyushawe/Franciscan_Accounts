package masterSettingsPageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import pageObjects.Utility;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;

public class PrintFormatSetting {
    WebDriver dr;
    String pg="PrintFormatSetting";
    Utility u= new Utility();

    public PrintFormatSetting(WebDriver d)
    {
        this.dr=d;
        PageFactory.initElements(d, this);
    }

    public void openPrintFormatSetting()
    {
        ArrayList<String> tabs2 = new ArrayList<String> (dr.getWindowHandles());
        dr.switchTo().window(tabs2.get(1));
        WebElement menu= dr.findElement(By.xpath("//a[contains(text(),'Master Settings')]"));
        Actions builder= new Actions(dr);
        builder.moveToElement(menu).build().perform();
        dr.findElement(By.linkText("Cheque Print Format Setting")).click();
        dr.switchTo().frame(dr.findElement(By.id("Cheque Print Format Setting")));
    }

    public void verifyPage(String schl,Collection<String> sc) throws IOException, InterruptedException
    {
        dr.findElement(By.xpath("//div[@class='content']")).click();
        Thread.sleep(1000);
        u.captureScreenshot(dr,schl,pg,sc);
    }
}
