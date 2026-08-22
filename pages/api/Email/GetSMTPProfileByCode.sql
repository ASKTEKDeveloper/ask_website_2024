SELECT TOP 1
    ProfileCode,
    ProfileName,
    SMTPHost,
    SMTPPort,
    IsSecure,
    SMTPUserName,
    SMTPPassword,
    FromEmail,
    IsActive
FROM Tbl_SMTPProfileMaster
WHERE ProfileCode = @ProfileCode
  AND IsActive = 'Y';
