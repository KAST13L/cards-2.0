import React from 'react';
import {BasicModal} from '../../common/components/BasicModal/BasicModal';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {useAppDispatch} from '../../common/hooks/hooks';
import {deleteCardTC} from '../PackPage/cards_reducer';
import {useNavigate} from 'react-router-dom';
import {CommonModalStateType} from "./commonTypes";
import {deletePackTC} from "../PacksList/pack-reducer";
import {Path} from "../../common/enum/Path";

type DeleteModalType = {
    data: CommonModalStateType
    isOpen: boolean
    onClose: () => void
}

export const DeleteModal: React.FC<DeleteModalType> = ({data, isOpen, onClose}) => {
    const {_id, name, question, title} = data
    const dispatch = useAppDispatch()

    const navigate = useNavigate()
    const deleteHandler = async () => {
        if (question) {
            dispatch(deleteCardTC(_id))
        } else {
            const res = await dispatch(deletePackTC(_id))
            res && navigate(`/${Path.PacksList}`)
        }
        // question ? dispatch(deleteCardTC(_id)) : dispatch(deletePackTC(_id))
        onClose()
    }

    return (
        <BasicModal isOpen={isOpen} onClose={onClose} title={title}>
            <div>Do you really want to remove <b>{name || question}</b> ?</div>
            {title === 'Delete Pack'
                ? <div>All cards will be deleted.</div>
                : <div>This card will be deleted</div>}
            <Stack spacing={2} direction={'row'} justifyContent={'space-between'} sx={{marginTop: '26px'}}>
                <Button variant={'outlined'}
                        onClick={onClose}
                        sx={{width: '115px'}}>Cancel</Button>
                <Button variant={'contained'}
                        color={'error'}
                        onClick={deleteHandler}
                        sx={{width: '115px'}}>Delete</Button>
            </Stack>
        </BasicModal>
    );
};