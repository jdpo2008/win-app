import React, { useCallback, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

ProfileNewEditForm.propTypes = {
  isEdit: PropTypes.bool,
  currentProfile: PropTypes.object,
};

export default function ProfileNewEditForm({ isEdit = false, currentProfile }) {
  return <div>Editar Perfil</div>;
}
