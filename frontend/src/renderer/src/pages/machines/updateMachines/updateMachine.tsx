import CustomInput from '@renderer/utils/customInput';
import useBackspaceNavigation from '@renderer/utils/goBack';
import OwnModal from '@renderer/utils/ownModal';
import Typewriter from '@renderer/utils/typewriter';
import APIService from '@shared/services/services.js';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';

type types = 'G' | 'U' | 'A' | 'B';

interface machine {
  id: string;
  name: string;
  type: types | '';
  capacity: number | undefined;
  initialUbicationLatitude: number | undefined;
  initialUbicationLongitude: number | undefined;
}

function UpdatedMachine(): JSX.Element {
  useBackspaceNavigation();

  const apiService = new APIService();

  const initialValues: machine = {
    id: '',
    name: '',
    type: '',
    capacity: undefined,
    initialUbicationLatitude: undefined,
    initialUbicationLongitude: undefined,
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values: machine) => {
      apiService
        .updateMachine(values)
        .then((machine) => console.log('Máquina:', machine))
        .catch((error) => console.error('Error modifying machine:', error));
    },
  });

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleOpenModal();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 's' && modalIsOpen) {
        formik.submitForm();
        handleCloseModal();
      } else {
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleCloseModal]);

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col h-full w-1/1.5 justify-center"
      >
        <label className="mb-8">
          <Typewriter text="Editar Máquina:" />
        </label>
        <div className="flex items-center justify-between pl-4 pr-4 space-x-2">
          <label className="pl-10">
            <Typewriter text="Identificador (número entre 1 y 10)?" />
          </label>
          <CustomInput
            type="text"
            name="id"
            value={formik.values.id}
            onChange={formik.handleChange}
          />
        </div>
        <div className="flex items-center justify-between pl-4 pr-4 space-x-4">
          <label className="pl-10">
            <Typewriter text="Nombre (entre 1 y 20 caracteres)?" />
          </label>
          <CustomInput
            type="text"
            maxLength={20}
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>
        <div className="flex items-center justify-between pl-4 pr-4 space-x-4">
          <label className="pl-10">
            <Typewriter text="Tipo (G-Grano, U-Uva, A-Aceituna, B-Borrar)?" />
          </label>
          <CustomInput
            type="text"
            name="type"
            value={formik.values.type}
            onChange={formik.handleChange}
          />
        </div>
        <div className="flex items-center justify-between pl-4 pr-4 space-x-4">
          <label className="pl-10">
            <Typewriter text="Capacidad (hectáreas/día)?" />
          </label>
          <CustomInput
            type="number"
            name="capacity"
            value={formik.values.capacity}
            onChange={formik.handleChange}
          />
        </div>
        <div className="flex items-center justify-between pl-4 pr-4 space-x-4">
          <label className="pl-10">
            <Typewriter text="Ubicación inicial (Latitud)?" />
          </label>
          <CustomInput
            type="number"
            min={1}
            max={50}
            name="initialUbicationLatitude"
            value={formik.values.initialUbicationLatitude}
            onChange={formik.handleChange}
          />
        </div>
        <div className="flex items-center justify-between pl-4 pr-4 space-x-4">
          <label className="pl-10">
            <Typewriter text="Ubicación inicial (Longitud)?" />
          </label>
          <CustomInput
            type="number"
            min={1}
            max={50}
            name="initialUbicationLongitude"
            value={formik.values.initialUbicationLongitude}
            onChange={formik.handleChange}
          />
        </div>
        <p className="mt-8">
          <Typewriter text="Presiona Enter para enviar la modificación." />
        </p>
      </form>
      <OwnModal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
        <div className="flex flex-col h-full justify-center p-4 justify-around">
          <p>IMPORTANTE: Esta opción borra los datos anteriores.</p>
          <p>Son correctos los nuevos datos (S/N)?</p>
        </div>
      </OwnModal>
    </>
  );
}

export default UpdatedMachine;
