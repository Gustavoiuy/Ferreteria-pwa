export interface DatosCURP {
    error: boolean;
    code_error: number;
    error_message: string;
    response: {
        Solicitante: {
            CURP: string;
            Nombres: string;
            ApellidoPaterno: string;
            ApellidoMaterno: string;
            ClaveSexo: string;
            Sexo: string;
            FechaNacimiento: string;
            Nacionalidad: string;
            ClaveEntidadNacimiento: string;
            EntidadNacimiento: string;
            ClaveDocProbatorio: string;
            DocProbatorio: string;
            ClaveStatusCurp: string;
            StatusCurp: string;
        };
        DocProbatorio: {
            AnioRegistro: string;
            ClaveEntidadEmisora: string;
            ClaveMunicipioRegistro: string;
            MunicipioRegistro: string | null;
            Foja: string;
            FolioCarta: string;
            Libro: string | null;
            NumActa: string;
            NumEntidadRegistrante: string;
            EntidadRegistrante: string;
            NumRegExtranjeros: string;
            Tomo: string;
        };
    };
}