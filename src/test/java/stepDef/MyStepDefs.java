package stepDef;

import java.util.Collection;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import accountsPageObject.BankPaymentVoucher;
import accountsPageObject.BankReceiptVoucher;
import accountsPageObject.CashPaymentVoucher;
import accountsPageObject.CashReceiptVoucher;
import accountsPageObject.ChequeClearing;
import accountsPageObject.ChequePrinting;
import accountsPageObject.ContraVoucher;
import accountsPageObject.DefineAccountGroup;
import accountsPageObject.DefineBankLedger;
import accountsPageObject.DefineGeneralLedger;
import accountsPageObject.DefineGroupNature;
import accountsPageObject.DefinePartyLedger;
import accountsPageObject.JournalVoucher;
import accountsPageObject.SalaryPaymentVoucher;
import accountsPageObject.VoucherImageUpload;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import globalMastersPageObject.DefineNarrationMaster;
import masterSettingsPageObject.AccountMasterSetting;
import masterSettingsPageObject.AccountPettyCashSetting;
import masterSettingsPageObject.VoucherCodeSettings;
import masterSettingsPageObject.VoucherPrintSettings;
import pageObjects.BalanceSheet;
import pageObjects.BankLedger;
import pageObjects.CashBankBook;
import pageObjects.DailyCashStatus;
import pageObjects.DayBook;
import pageObjects.DepreciationChart;
import pageObjects.DepreciationDetailItemWise;
import pageObjects.EntryTypeWiseReport;
import pageObjects.GroupWiseReport;
import pageObjects.IncomeAndExpenditure;
import pageObjects.JournalLedgerBook;
import pageObjects.LedgerReport;
import pageObjects.LedgerReportDetail;
import pageObjects.ProfitAndLoss;
import pageObjects.ReconciliationStatement;
import pageObjects.TrialBalance;
import pageObjects.TrialBalanceNew;

public class MyStepDefs {
  WebDriver dr;
  String schoolname;
  Collection<String> scenario;
  
	@Before
	public void launchBrowser(Scenario sc)
	{
		System.setProperty("webdriver.chrome.driver", "D:\\selenium\\chrome\\chromedriver.exe");
		dr= new ChromeDriver();
		dr.manage().window().maximize();
		scenario= sc.getSourceTagNames();
	}
	
	@After
	public void closeBrowser() throws InterruptedException
	{
		Thread.sleep(4000);
		dr.quit();
	}
	
	@Given("^user enter \"([^\"]*)\"$")
	public void user_enter(String arg1) throws Throwable {
	    dr.get(arg1);
	}

	@When("^user enter username \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void user_enter_username_and_password(String arg1, String arg2) throws Throwable {
		dr.findElement(By.id("txtUserName")).sendKeys(arg1);
		dr.findElement(By.id("txtPassword")).sendKeys(arg2);
	}

	@When("^passes school name \"([^\"]*)\"$")
	public void passes_school_name(String arg1) throws Throwable {
		schoolname=arg1;
	}

	@When("^click signin$")
	public void click_signin() throws Throwable {
		dr.findElement(By.id("btnLogin")).click();  
		Thread.sleep(1000);
	}

	@Then("^account home page is opened$")
	public void account_home_page_is_opened() throws Throwable {
	    dr.findElement(By.xpath("//img[@src='images/big/Account-Manager.png']")).click();
	}

//daily cash status
	@When("^user opens daily cash status page$")
	public void user_opens_daily_cash_status_page() throws Throwable {
		DailyCashStatus d= new DailyCashStatus(dr);
		d.openDailyCashStatus();
	}

	@When("^select from date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on daily cash status page$")
	public void select_from_date_as_month_year_and_day_on_daily_cash_status_page(String arg1, String arg2, String arg3) throws Throwable {
		DailyCashStatus d= new DailyCashStatus(dr);
		d.selectFromDate(arg1, arg2, arg3);
	}

	@When("^select to date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on daily cash status page$")
	public void select_to_date_as_month_year_and_day_on_daily_cash_status_page(String arg1, String arg2, String arg3) throws Throwable {
		DailyCashStatus d= new DailyCashStatus(dr);
		d.selectToDate(arg1, arg2, arg3);
	}

	@When("^select cash account \"([^\"]*)\" on daily cash status page$")
	public void select_cash_account_on_daily_cash_status_page(String arg1) throws Throwable {
		DailyCashStatus d= new DailyCashStatus(dr);
		d.selectCashAccount(arg1);
	}
	
	@When("^click consolidated report check box on daily cash status page$")
	public void click_consolidated_report_check_box_on_daily_cash_status_page() throws Throwable {
		DailyCashStatus d= new DailyCashStatus(dr);
		d.selectConsolidatedReport();
	}

	@Then("^click show to open daily cash status report$")
	public void click_show_to_open_daily_cash_status_report() throws Throwable {
		DailyCashStatus d= new DailyCashStatus(dr);
		d.clickShow(schoolname, scenario);
	}

//bank ledger
	@When("^user opens bank ledger page$")
	public void user_opens_bank_ledger_page() throws Throwable {
		BankLedger bl= new BankLedger(dr);
		bl.openBankLedger();
	}

	@When("^select from date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on bank ledger page$")
	public void select_from_date_as_month_year_and_day_on_bank_ledger_page(String arg1, String arg2, String arg3) throws Throwable {
		BankLedger bl= new BankLedger(dr);
		bl.selectFromDate(arg1, arg2, arg3);
	}

	@When("^select to date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on bank ledger page$")
	public void select_to_date_as_month_year_and_day_on_bank_ledger_page(String arg1, String arg2, String arg3) throws Throwable {
		BankLedger bl= new BankLedger(dr);
		bl.selectToDate(arg1, arg2, arg3);
	}

	@When("^select bank account \"([^\"]*)\" on bank ledger page$")
	public void select_bank_account_on_bank_ledger_page(String arg1) throws Throwable {
		BankLedger bl= new BankLedger(dr);
		bl.selectBankAccount(arg1);
	}

	@Then("^click show to open bank ledger report$")
	public void click_show_to_open_bank_ledger_report() throws Throwable {
		BankLedger bl= new BankLedger(dr);
		bl.clickShow(schoolname, scenario);
	}
	
//LedgerReport
	@When("^user opens ledger report page$")
	public void user_opens_ledger_report_page() throws Throwable {
		LedgerReport lr= new LedgerReport(dr);
		lr.openLedgerReport();
	}
	
	@When("^select from date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on ledger report page$")
	public void select_from_date_as_month_year_and_day_on_ledger_report_page(String arg1, String arg2, String arg3) throws Throwable {
		LedgerReport lr= new LedgerReport(dr);
		lr.selectFromDate(arg1, arg2, arg3);
	}

	@When("^select to date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on ledger report page$")
	public void select_to_date_as_month_year_and_day_on_ledger_report_page(String arg1, String arg2, String arg3) throws Throwable {
		LedgerReport lr= new LedgerReport(dr);
		lr.selectToDate(arg1, arg2, arg3);
	}

	@When("^select party account \"([^\"]*)\" on ledger report page$")
	public void select_party_account_on_ledger_report_page(String arg1) throws Throwable {
		LedgerReport lr= new LedgerReport(dr);
		lr.selectPartyAccount(arg1);
	}

	@Then("^click show to open ledger report$")
	public void click_show_to_open_ledger_report() throws Throwable {
		LedgerReport lr= new LedgerReport(dr);
		lr.clickShow(schoolname, scenario);
	}

//depreciation chart
	@When("^user opens depreciation chart page$")
	public void user_opens_depreciation_chart_page() throws Throwable {
		DepreciationChart dc= new DepreciationChart(dr);
		dc.openDepreciationChart();
	}

	@Then("^click show to open depreciation chart$")
	public void click_show_to_open_depreciation_chart() throws Throwable {
		DepreciationChart dc= new DepreciationChart(dr);
		dc.clickShow(schoolname, scenario);
	}

//day book
	@When("^user opens day book page$")
	public void user_opens_day_book_page() throws Throwable {
		DayBook db= new DayBook(dr);
		db.openDayBook();
	}

	@When("^select from date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on day book page$")
	public void select_from_date_as_month_year_and_day_on_day_book_page(String arg1, String arg2, String arg3) throws Throwable {
		DayBook db= new DayBook(dr);
		db.selectFromDate(arg1, arg2, arg3);
	}

	@When("^select to date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on day book page$")
	public void select_to_date_as_month_year_and_day_on_day_book_page(String arg1, String arg2, String arg3) throws Throwable {
		DayBook db= new DayBook(dr);
		db.selectToDate(arg1, arg2, arg3);
	}

	@Then("^click show to open day book report$")
	public void click_show_to_open_day_book_report() throws Throwable {
		DayBook db= new DayBook(dr);
		db.clickShow(schoolname, scenario);
	}

//balance sheet
	@When("^user opens balance sheet page$")
	public void user_opens_balance_sheet_page() throws Throwable {
		BalanceSheet bs= new BalanceSheet(dr);
		bs.openBalanceSheet();
	}

	@When("^select from date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on balance sheet page$")
	public void select_from_date_as_month_year_and_day_on_balance_sheet_page(String arg1, String arg2, String arg3) throws Throwable {
		BalanceSheet bs= new BalanceSheet(dr);
		bs.selectFromDate(arg1, arg2, arg3);
	}

	@When("^select to date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on balance sheet page$")
	public void select_to_date_as_month_year_and_day_on_balance_sheet_page(String arg1, String arg2, String arg3) throws Throwable {
		BalanceSheet bs= new BalanceSheet(dr);
		bs.selectToDate(arg1, arg2, arg3);
	}

	@When("^click \"([^\"]*)\" on balance sheet page$")
	public void click_on_balance_sheet_page(String arg1) throws Throwable {
		BalanceSheet bs= new BalanceSheet(dr);
		bs.selectType(arg1);
	}

	@Then("^click show to open balance sheet report$")
	public void click_show_to_open_balance_sheet_report() throws Throwable {
		BalanceSheet bs= new BalanceSheet(dr);
		bs.clickShow(schoolname, scenario);
	}

//profit and loss
	@When("^user opens profit and loss page$")
	public void user_opens_profit_and_loss_page() throws Throwable {
		ProfitAndLoss pl= new ProfitAndLoss(dr);
		pl.openProfitAndLoss();
	}

	@Then("^click show to open profit and loss report$")
	public void click_show_to_open_profit_and_loss_report() throws Throwable {
		ProfitAndLoss pl= new ProfitAndLoss(dr);
		pl.clickShow(schoolname, scenario);
	}

//income and expenditure
	@When("^user opens income and expenditure page$")
	public void user_opens_income_and_expenditure_page() throws Throwable {
		IncomeAndExpenditure ie= new IncomeAndExpenditure(dr);
		ie.openIncomeAndExpenditure();
	}

	@Then("^click show to open income and expenditure report$")
	public void click_show_to_open_income_and_expenditure_report() throws Throwable {
		IncomeAndExpenditure ie= new IncomeAndExpenditure(dr);
		ie.clickShow(schoolname, scenario);
	}

//journal ledger book
	@When("^user opens journal ledger book page$")
	public void user_opens_journal_ledger_book_page() throws Throwable {
		JournalLedgerBook lb= new JournalLedgerBook(dr);
		lb.openJournalLedgerBook();
	}

	@When("^select from date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on journal ledger book$")
	public void select_from_date_as_month_year_and_day_on_journal_ledger_book(String arg1, String arg2, String arg3) throws Throwable {
		JournalLedgerBook lb= new JournalLedgerBook(dr);
		lb.selectFromDate(arg1, arg2, arg3);
	}

	@When("^select to date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on journal ledger book$")
	public void select_to_date_as_month_year_and_day_on_journal_ledger_book(String arg1, String arg2, String arg3) throws Throwable {
		JournalLedgerBook lb= new JournalLedgerBook(dr);
		lb.selectToDate(arg1, arg2, arg3);
	}

	@Then("^click show to open journal ledger book report$")
	public void click_show_to_open_journal_ledger_book_report() throws Throwable {
		JournalLedgerBook lb= new JournalLedgerBook(dr);
		lb.clickShow(schoolname, scenario);
	}
	
//depreciation detail item wise
	@When("^user opens depreciation detail item wise page$")
	public void user_opens_depreciation_detail_item_wise_page() throws Throwable {
		DepreciationDetailItemWise dd= new DepreciationDetailItemWise(dr);
		dd.openDepreciationDetailItemWise();
	}
	
	@Then("^click show to open depreciation detail item wise report$")
	public void click_show_to_open_depreciation_detail_item_wise_report() throws Throwable {
		DepreciationDetailItemWise dd= new DepreciationDetailItemWise(dr);
		dd.clickShow(schoolname, scenario);
	}
	
//entry type wise report
	@When("^user opens entry type wise report page$")
	public void user_opens_entry_type_wise_report_page() throws Throwable {
		EntryTypeWiseReport tr= new EntryTypeWiseReport(dr);
		tr.openEntryTypeWiseReport();
	}

	@When("^select from date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on entry type wise report page$")
	public void select_from_date_as_month_year_and_day_on_entry_type_wise_report_page(String arg1, String arg2, String arg3) throws Throwable {
		EntryTypeWiseReport tr= new EntryTypeWiseReport(dr);
		tr.selectFromDate(arg1, arg2, arg3);
	}

	@When("^select to date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on entry type wise report page$")
	public void select_to_date_as_month_year_and_day_on_entry_type_wise_report_page(String arg1, String arg2, String arg3) throws Throwable {
		EntryTypeWiseReport tr= new EntryTypeWiseReport(dr);
		tr.selectToDate(arg1, arg2, arg3);
	}

	@When("^select entry type \"([^\"]*)\" on entry type wise report page$")
	public void select_entry_type_on_entry_type_wise_report_page(String arg1) throws Throwable {
		EntryTypeWiseReport tr= new EntryTypeWiseReport(dr);
		tr.selectEntryType(arg1);
	}

	@When("^click date wise consolidated report checkbox on entry type wise report page$")
	public void click_date_wise_consolidated_report_checkbox_on_entry_type_wise_report_page() throws Throwable {
		EntryTypeWiseReport tr= new EntryTypeWiseReport(dr);
		tr.selectDateWiseConsolidatedReport();
	}
	
	@Then("^click show to open entry type wise report$")
	public void click_show_to_open_entry_type_wise_report() throws Throwable {
		EntryTypeWiseReport tr= new EntryTypeWiseReport(dr);
		tr.clickShow(schoolname, scenario);
	}
	
//reconciliation statement

  @When("^user opens reconciliation statement page$")
  public void user_opens_reconciliation_statement_page() throws Throwable {
      ReconciliationStatement rs= new ReconciliationStatement(dr);
	  rs.openReconciliationStatement();
  }

  @When("^select from date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on reconciliation statement page$")
  public void select_from_date_as_month_year_and_day_on_reconciliation_statement_page(String arg1, String arg2, String arg3) throws Throwable {
	  ReconciliationStatement rs= new ReconciliationStatement(dr);
	  rs.selectFromDate(arg1, arg2, arg3);
  }

  @When("^select to date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on reconciliation statement page$")
  public void select_to_date_as_month_year_and_day_on_reconciliation_statement_page(String arg1, String arg2, String arg3) throws Throwable {
      ReconciliationStatement rs= new ReconciliationStatement(dr);
	  rs.selectToDate(arg1, arg2, arg3);
  }

  @When("^select bank \"([^\"]*)\" on reconciliation statement page$")
  public void select_bank_on_reconciliation_statement_page(String arg1) throws Throwable {
	 ReconciliationStatement rs= new ReconciliationStatement(dr);
	 rs.selectBank(arg1);
  }

  @When("^select cheque status \"([^\"]*)\" on reconciliation statement page$")
  public void select_cheque_status_on_reconciliation_statement_page(String arg1) throws Throwable {
	  ReconciliationStatement rs= new ReconciliationStatement(dr);
	  rs.selectChequeStatus(arg1);
  }

  @When("^select with student wise cheque on reconciliation statement page$")
  public void select_with_student_wise_cheque_on_reconciliation_statement_page() throws Throwable {
	  ReconciliationStatement rs= new ReconciliationStatement(dr);
	  rs.selectWithStudentWise();
  }
  
  @Then("^click show to open reconciliation statement report$")
  public void click_show_to_open_reconciliation_statement_report() throws Throwable {
	  ReconciliationStatement rs= new ReconciliationStatement(dr);
	  rs.clickShow(schoolname, scenario);
  }

//group wise report
  @When("^user opens group wise report page$")
  public void user_opens_group_wise_report_page() throws Throwable {
	  GroupWiseReport gr= new GroupWiseReport(dr);
	  gr.openGroupWiseReport();
  }

  @When("^select from date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on group wise report page$")
  public void select_from_date_as_month_year_and_day_on_group_wise_report_page(String arg1, String arg2, String arg3) throws Throwable {
	  GroupWiseReport gr= new GroupWiseReport(dr);
	  gr.selectFromDate(arg1, arg2, arg3);
  }

  @When("^select to date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on group wise report page$")
  public void select_to_date_as_month_year_and_day_on_group_wise_report_page(String arg1, String arg2, String arg3) throws Throwable {
	  GroupWiseReport gr= new GroupWiseReport(dr);
	  gr.selectToDate(arg1, arg2, arg3);
  }

  @When("^select ledger group \"([^\"]*)\" on group wise report page$")
  public void select_ledger_group_on_group_wise_report_page(String arg1) throws Throwable {
	  GroupWiseReport gr= new GroupWiseReport(dr);
	  gr.selectLedgerGroup(arg1);
  }

  @When("^select account \"([^\"]*)\" on group wise report page$")
  public void select_account_on_group_wise_report_page(String arg1) throws Throwable {
	  GroupWiseReport gr= new GroupWiseReport(dr);
	  gr.selectAccount(arg1);
  }

  @Then("^click show to open group wise report$")
  public void click_show_to_open_group_wise_report() throws Throwable {
	  GroupWiseReport gr= new GroupWiseReport(dr);
	  gr.clickShow(schoolname, scenario);
  }

//cash/bank book
  @When("^user opens cash/bank book page$")
  public void user_opens_cash_bank_book_page() throws Throwable {
	  CashBankBook cbb= new CashBankBook(dr);
	  cbb.openCashBankBook();
  }

  @When("^select from date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on cash/bank book page$")
  public void select_from_date_as_month_year_and_day_on_cash_bank_book_page(String arg1, String arg2, String arg3) throws Throwable {
	  CashBankBook cbb= new CashBankBook(dr);
	  cbb.selectFromDate(arg1, arg2, arg3);
  }

  @When("^select to date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on cash/bank book page$")
  public void select_to_date_as_month_year_and_day_on_cash_bank_book_page(String arg1, String arg2, String arg3) throws Throwable {
	  CashBankBook cbb= new CashBankBook(dr);
	  cbb.selectToDate(arg1, arg2, arg3);
  }

  @When("^select ledger group \"([^\"]*)\" on cash/bank book page$")
  public void select_ledger_group_on_cash_bank_book_page(String arg1) throws Throwable {
	  CashBankBook cbb= new CashBankBook(dr);
	  cbb.selectLedgerGroup(arg1);
  }

  @When("^select account \"([^\"]*)\" on cash/bank book page$")
  public void select_account_on_cash_bank_book_page(String arg1) throws Throwable {
	  CashBankBook cbb= new CashBankBook(dr);
	  cbb.selectAccount(arg1);
  }

  @When("^select \"([^\"]*)\" on cash/bank book page$")
  public void select_on_cash_bank_book_page(String arg1) throws Throwable {
	  CashBankBook cbb= new CashBankBook(dr);
	  cbb.selectAccountType(arg1);
  }

  @When("^select detail on cash/bank book page$")
  public void select_detail_on_cash_bank_book_page() throws Throwable {
	  CashBankBook cbb= new CashBankBook(dr);
	  cbb.selectDetail();
  }
  
  @Then("^click show to open cash/bank book report$")
  public void click_show_to_open_cash_bank_book_report() throws Throwable {
	  CashBankBook cbb= new CashBankBook(dr);
	  cbb.clickShow(schoolname, scenario);
  }

//ledger report detail
  @When("^user opens ledger report detail page$")
  public void user_opens_ledger_report_detail_page() throws Throwable {
	  LedgerReportDetail lr= new LedgerReportDetail(dr);
	  lr.openLedgerReportDetail();
  }

  @When("^select from date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on ledger report detail page$")
  public void select_from_date_as_month_year_and_day_on_ledger_report_detail_page(String arg1, String arg2, String arg3) throws Throwable {
	  LedgerReportDetail lr= new LedgerReportDetail(dr);
	  lr.selectFromDate(arg1, arg2, arg3);
  }

  @When("^select to date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on ledger report detail page$")
  public void select_to_date_as_month_year_and_day_on_ledger_report_detail_page(String arg1, String arg2, String arg3) throws Throwable {
	  LedgerReportDetail lr= new LedgerReportDetail(dr);
	  lr.selectToDate(arg1, arg2, arg3);
  }

  @When("^select ledger group \"([^\"]*)\" on ledger report detail page$")
  public void select_ledger_group_on_ledger_report_detail_page(String arg1) throws Throwable {
	  LedgerReportDetail lr= new LedgerReportDetail(dr);
	  lr.selectLedgerGroup(arg1);
  }

  @When("^select account \"([^\"]*)\" on ledger report detail page$")
  public void select_account_on_ledger_report_detail_page(String arg1) throws Throwable {
	  LedgerReportDetail lr= new LedgerReportDetail(dr);
	  lr.selectAccount(arg1);
  }

  @When("^select consolidated report on ledger report detail page$")
  public void select_consolidated_report_on_ledger_report_detail_page() throws Throwable {
	  LedgerReportDetail lr= new LedgerReportDetail(dr);
	  lr.clickConsolidatedReport();
  }
  
  @When("^select student wise on ledger report detail page$")
  public void select_student_wise_on_ledger_report_detail_page() throws Throwable {
	  LedgerReportDetail lr= new LedgerReportDetail(dr);
	  lr.clickStudentWise();
  }

  @Then("^click show to open ledger report detail$")
  public void click_show_to_open_ledger_report_detail() throws Throwable {
	  LedgerReportDetail lr= new LedgerReportDetail(dr);
	  lr.clickShow(schoolname, scenario);
  }

//trial balance new
  @When("^user opens trial balance new page$")
  public void user_opens_trial_balance_new_page() throws Throwable {
	  TrialBalanceNew tb= new TrialBalanceNew(dr);
	  tb.openTrialBalanceNew();
  }

  @When("^select from date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on trial balance new page$")
  public void select_from_date_as_month_year_and_day_on_trial_balance_new_page(String arg1, String arg2, String arg3) throws Throwable {
	  TrialBalanceNew tb= new TrialBalanceNew(dr);
	  tb.selectFromDate(arg1, arg2, arg3);
  }

  @When("^select to date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on trial balance new page$")
  public void select_to_date_as_month_year_and_day_on_trial_balance_new_page(String arg1, String arg2, String arg3) throws Throwable {
	  TrialBalanceNew tb= new TrialBalanceNew(dr);
	  tb.selectToDate(arg1, arg2, arg3);
  }

  @When("^select ledger group \"([^\"]*)\" on trial balance new page$")
  public void select_ledger_group_on_trial_balance_new_page(String arg1) throws Throwable {
	  TrialBalanceNew tb= new TrialBalanceNew(dr);
	  tb.selectLedgerGroup(arg1);
  }

  @When("^select account \"([^\"]*)\" on trial balance new page$")
  public void select_account_on_trial_balance_new_page(String arg1) throws Throwable {
	  TrialBalanceNew tb= new TrialBalanceNew(dr);
	  tb.selectAccount(arg1);
  }

  @Then("^click show to open trial balance new page$")
  public void click_show_to_open_trial_balance_new_page() throws Throwable {
	  TrialBalanceNew tb= new TrialBalanceNew(dr);
	  tb.clickShow(schoolname, scenario);
  }

  @When("^select without zero amount on ledger report detail page$")
  public void select_without_zero_amount_on_ledger_report_detail_page() throws Throwable {
	  TrialBalanceNew tb= new TrialBalanceNew(dr);
	  tb.clickWithoutZeroAmount();
  }

  @When("^select closing without zero amount on ledger report detail page$")
  public void select_closing_without_zero_amount_on_ledger_report_detail_page() throws Throwable {
	  TrialBalanceNew tb= new TrialBalanceNew(dr);
	  tb.clickClosingWithoutZeroAmount();
  }
  
  //trial balance
  @When("^user opens trial balance page$")
  public void user_opens_trial_balance_page() throws Throwable {
	  TrialBalance tbal= new TrialBalance(dr);
	  tbal.openTrialBalance();
  }

  @When("^select from date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on trial balance page$")
  public void select_from_date_as_month_year_and_day_on_trial_balance_page(String arg1, String arg2, String arg3) throws Throwable {
	  TrialBalance tbal= new TrialBalance(dr);
	  tbal.selectFromDate(arg1, arg2, arg3);
  }

  @When("^select to date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on trial balance page$")
  public void select_to_date_as_month_year_and_day_on_trial_balance_page(String arg1, String arg2, String arg3) throws Throwable {
	  TrialBalance tbal= new TrialBalance(dr);
	  tbal.selectToDate(arg1, arg2, arg3);
  }

  @When("^select ledger group \"([^\"]*)\" on trial balance page$")
  public void select_ledger_group_on_trial_balance_page(String arg1) throws Throwable {
	  TrialBalance tbal= new TrialBalance(dr);
	  tbal.selectLedgerGroup(arg1);
  }

  @When("^select account \"([^\"]*)\" on trial balance page$")
  public void select_account_on_trial_balance_page(String arg1) throws Throwable {
	  TrialBalance tbal= new TrialBalance(dr);
	  tbal.selectAccount(arg1);
  }

  @When("^click \"([^\"]*)\" on trial balance page$")
  public void click_on_trial_balance_page(String arg1) throws Throwable {
	  TrialBalance tbal= new TrialBalance(dr);
	  tbal.selectGroupLedgerWise(arg1);
  }

  @When("^click opening \"([^\"]*)\" on trial balance page$")
  public void click_opening_on_trial_balance_page(String arg1) throws Throwable {
	  TrialBalance tbal= new TrialBalance(dr);
	  tbal.selectOpening(arg1);
  }

  @Then("^click show to open trial balance page$")
  public void click_show_to_open_trial_balance_page() throws Throwable {
	  TrialBalance tbal= new TrialBalance(dr);
	  tbal.clickShow(schoolname, scenario);
  }

//account master setting
  @When("^user open account master setting page$")
  public void user_open_account_master_setting_page() throws Throwable {
	  AccountMasterSetting ams= new AccountMasterSetting(dr);
	  ams.openAccountMasterSetting();
  }

  @Then("^verify account master setting page$")
  public void verify_account_master_setting_page() throws Throwable {
	  AccountMasterSetting ams= new AccountMasterSetting(dr);
	  ams.verifyPage(schoolname, scenario);
  }
  
//account petty cash setting
  @When("^user open account petty cash setting page$")
  public void user_open_account_petty_cash_setting_page() throws Throwable {
	  AccountPettyCashSetting apcs= new AccountPettyCashSetting(dr);
	  apcs.openAccountPettyCashSetting();
  }

  @Then("^verify account petty cash setting page$")
  public void verify_account_petty_cash_setting_page() throws Throwable {
	  AccountPettyCashSetting apcs= new AccountPettyCashSetting(dr);
	  apcs.verifyPage(schoolname, scenario);
  }

//voucher print settings
  @When("^user open voucher print settings page$")
  public void user_open_voucher_print_settings_page() throws Throwable {
      VoucherPrintSettings vps= new VoucherPrintSettings(dr);
      vps.openVoucherPrintSettings();
  }

  @Then("^verify voucher print settings page$")
  public void verify_voucher_print_settings_page() throws Throwable {
	  VoucherPrintSettings vps= new VoucherPrintSettings(dr);
	  vps.verifyPage(schoolname, scenario);
  }
  
//voucher code settings
  @When("^user open voucher code settings page$")
  public void user_open_voucher_code_settings_page() throws Throwable {
	  VoucherCodeSettings vcs= new VoucherCodeSettings(dr);
	  vcs.openVoucherCodeSettings();
  }

  @Then("^verify voucher code settings page$")
  public void verify_voucher_code_settings_page() throws Throwable {
	  VoucherCodeSettings vcs= new VoucherCodeSettings(dr);
	  vcs.verifyPage(schoolname, scenario);
  }

//define narration master
  @When("^user open define narration master page$")
  public void user_open_define_narration_master_page() throws Throwable {
	  DefineNarrationMaster dnm= new DefineNarrationMaster(dr);
	  dnm.openDefineNarrationMaster();
  }

  @Then("^verify define narration master page$")
  public void verify_define_narration_master_page() throws Throwable {
	  DefineNarrationMaster dnm= new DefineNarrationMaster(dr);
	  dnm.verifyPage(schoolname, scenario);
  }
  
//define account group
  @When("^user open define account group page$")
  public void user_open_define_account_group_page() throws Throwable {
	  DefineAccountGroup dag= new DefineAccountGroup(dr);
	  dag.openDefineAccountGroup();
  }

  @Then("^verify define account group page$")
  public void verify_define_account_group_page() throws Throwable {
	  DefineAccountGroup dag= new DefineAccountGroup(dr);
	  dag.verifyPage(schoolname, scenario);
  }
  
//define bank ledger
  @When("^user open define bank ledger page$")
  public void user_open_define_bank_ledger_page() throws Throwable {
	  DefineBankLedger dbl= new DefineBankLedger(dr);
	  dbl.openDefineBankLedger();
  }

  @Then("^verify define bank ledger page$")
  public void verify_define_bank_ledger_page() throws Throwable {
	  DefineBankLedger dbl= new DefineBankLedger(dr);
	  dbl.verifyPage(schoolname, scenario);
  }
  
//define party ledger
  @When("^user open define party ledger page$")
  public void user_open_define_party_ledger_page() throws Throwable {
	  DefinePartyLedger dpl= new DefinePartyLedger(dr);
	  dpl.openDefinePartyLedger();
  }

  @Then("^verify define party ledger page$")
  public void verify_define_party_ledger_page() throws Throwable {
	  DefinePartyLedger dpl= new DefinePartyLedger(dr);
	  dpl.verifyPage(schoolname, scenario);
  }

//define general ledger
  @When("^user open define general ledger page$")
  public void user_open_define_general_ledger_page() throws Throwable {
	  DefineGeneralLedger dgl= new DefineGeneralLedger(dr);
	  dgl.openDefineGeneralLedger();
  }

  @Then("^verify define general ledger page$")
  public void verify_define_general_ledger_page() throws Throwable {
	  DefineGeneralLedger dgl= new DefineGeneralLedger(dr);
	  dgl.verifyPage(schoolname, scenario);
  }
  
//bank payment voucher
  @When("^user open bank payment voucher page$")
  public void user_open_bank_payment_voucher_page() throws Throwable {
	  BankPaymentVoucher bpv= new BankPaymentVoucher(dr);
	  bpv.openBankPaymentVoucher();
  }

  @Then("^verify bank payment voucher page$")
  public void verify_bank_payment_voucher_page() throws Throwable {
	  BankPaymentVoucher bpv= new BankPaymentVoucher(dr);
	  bpv.verifyPage(schoolname, scenario);
  }
  
//cash payment voucher
  @When("^user open cash payment voucher page$")
  public void user_open_cash_payment_voucher_page() throws Throwable {
	  CashPaymentVoucher cpv= new CashPaymentVoucher(dr);
	  cpv.openCashPaymentVoucher();
  }

  @Then("^verify cash payment voucher page$")
  public void verify_cash_payment_voucher_page() throws Throwable {
	  CashPaymentVoucher cpv= new CashPaymentVoucher(dr);
	  cpv.verifyPage(schoolname, scenario);
  }

//bank receipt voucher
  @When("^user open bank receipt voucher page$")
  public void user_open_bank_receipt_voucher_page() throws Throwable {
	  BankReceiptVoucher brv= new BankReceiptVoucher(dr);
	  brv.openBankReceiptVoucher();
  }

  @Then("^verify bank receipt voucher page$")
  public void verify_bank_receipt_voucher_page() throws Throwable {
	  BankReceiptVoucher brv= new BankReceiptVoucher(dr);
	  brv.verifyPage(schoolname, scenario);
  }

//cash receipt voucher
  @When("^user open cash receipt voucher page$")
  public void user_open_cash_receipt_voucher_page() throws Throwable {
	  CashReceiptVoucher crv= new CashReceiptVoucher(dr);
	  crv.openCashReceiptVoucher();
  }

  @Then("^verify cash receipt voucher page$")
  public void verify_cash_receipt_voucher_page() throws Throwable {
	  CashReceiptVoucher crv= new CashReceiptVoucher(dr);
	  crv.verifyPage(schoolname, scenario);
  }
  
//contra voucher
  @When("^user open contra voucher page$")
  public void user_open_contra_voucher_page() throws Throwable {
	  ContraVoucher cv= new ContraVoucher(dr);
	  cv.openContraVoucher();
  }

  @Then("^verify contra voucher page$")
  public void verify_contra_voucher_page() throws Throwable {
	  ContraVoucher cv= new ContraVoucher(dr);
	  cv.verifyPage(schoolname, scenario);
  }

//journal voucher
  @When("^user open journal voucher page$")
  public void user_open_journal_voucher_page() throws Throwable {
	  JournalVoucher jv= new JournalVoucher(dr);
	  jv.openJournalVoucher();
  }

  @Then("^verify journal voucher page$")
  public void verify_journal_voucher_page() throws Throwable {
	  JournalVoucher jv= new JournalVoucher(dr);
	  jv.verifyPage(schoolname, scenario);
  }
  
//cheque clearing
  @When("^user open cheque clearing page$")
  public void user_open_cheque_clearing_page() throws Throwable {
	  ChequeClearing cc= new ChequeClearing(dr);
	  cc.openChequeClearing();
  }

  @Then("^verify cheque clearing page$")
  public void verify_cheque_clearing_page() throws Throwable {
	  ChequeClearing cc= new ChequeClearing(dr);
	  cc.verifyPage(schoolname, scenario);
  }

//salary payment voucher
  @When("^user open salary payment voucher page$")
  public void user_open_salary_payment_voucher_page() throws Throwable {
	  SalaryPaymentVoucher spv= new SalaryPaymentVoucher(dr);
	  spv.openSalaryPaymentVoucher();
  }

  @Then("^verify salary payment voucher page$")
  public void verify_salary_payment_voucher_page() throws Throwable {
	  SalaryPaymentVoucher spv= new SalaryPaymentVoucher(dr);
	  spv.verifyPage(schoolname, scenario);
  }

//voucher image upload
  @When("^user open voucher image upload page$")
  public void user_open_voucher_image_upload_page() throws Throwable {
	  VoucherImageUpload viu= new VoucherImageUpload(dr);
	  viu.openVoucherImageUpload();
  }

  @Then("^verify voucher image upload page$")
  public void verify_voucher_image_upload_page() throws Throwable {
	  VoucherImageUpload viu= new VoucherImageUpload(dr);
	  viu.verifyPage(schoolname, scenario);
  }
  
//cheque printing
  @When("^user open cheque printing page$")
  public void user_open_cheque_printing_page() throws Throwable {
	  ChequePrinting cp= new ChequePrinting(dr);
	  cp.openChequePrinting();
  }

  @Then("^verify cheque printing page$")
  public void verify_cheque_printing_page() throws Throwable {
	  ChequePrinting cp= new ChequePrinting(dr);
	  cp.verifyPage(schoolname, scenario);
  }
  
//define group nature
  @When("^user open define group nature page$")
  public void user_open_define_group_nature_page() throws Throwable {
	  DefineGroupNature dgn= new DefineGroupNature(dr);
	  dgn.openDefineGroupNature();
  }

  @Then("^verify define group nature page$")
  public void verify_define_group_nature_page() throws Throwable {
	  DefineGroupNature dgn= new DefineGroupNature(dr);
	  dgn.verifyPage(schoolname, scenario);
  }
}
