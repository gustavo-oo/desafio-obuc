import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from "components/Button";

const ConfirmDialog = ({ open, setOpen, setAnswer, text }) => {
    function handleClose() {
        setOpen(false);
    };

    function handleYesClick() {
        setAnswer(true);
        handleClose();
    }

    function handleNoClick() {
        setAnswer(false);
        handleClose();
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            PaperProps={{
                style: { borderRadius: "20px" }
            }}
        >
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {text}
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'center'}}>
                <Button className="button-secondary" label="Não" onClick={handleNoClick} />
                <Button label="Sim" onClick={handleYesClick}>Sim</Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog;
