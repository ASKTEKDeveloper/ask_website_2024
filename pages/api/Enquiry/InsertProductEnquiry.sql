INSERT INTO
    TblProductEnquiry (
        UserName,
        PhoneNumber,
        Email,
        City,
        Country,
        CompanyName,        
        TypeOfReq,
        Product,
        Remarks,
        CreatedDate
    )
VALUES
    (
        @UserName,
        @PhoneNumber,
        @Email,
        @City,
        @Country,
        @CompanyName,
        @TypeOfReq,
        @Product,
        @Remarks,
        GETDATE()
    )
SELECT
    SCOPE_IDENTITY() AS EnquiryId 