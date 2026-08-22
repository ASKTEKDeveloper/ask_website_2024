INSERT INTO
    TblJobApplies (
        UserName,
        PhoneNumber,
        Email,
        Gender,
        Attachment,
        Experience,
        CreatedDate
    )
VALUES
    (
        @UserName,
        @PhoneNumber,
        @Email,
        @Gender,
        @Attachment,
        @Experience,
        GETDATE()
    )
SELECT
    SCOPE_IDENTITY() AS ApplicationId